import { Checkbox } from "primereact/checkbox";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { Editor } from "primereact/editor";
import { Inplace, InplaceContent, InplaceDisplay } from "primereact/inplace";
import { InputNumber } from "primereact/inputnumber";
import { InputText } from "primereact/inputtext";
import { SelectButton } from "primereact/selectbutton";
import { InputMask } from "primereact/inputmask";
import React, { useEffect, useState } from "react";
import { toast } from "../../../../App";
import { Button, Card } from "../../../../components/shared";
import UploadFile from "../../../../components/shared/UploadFile";
import {
  categories,
  propertyFeatures,
  propertyTypes,
  provincias,
} from "../../../../utility/data";
import { usePropertyState } from "../../context";
import { CreatePropertyDto, Property } from "../../models/property.model";
import { deleteImage } from "../../services";

interface ICreatePropertyModalProps {
  children?: React.ReactNode;
  property?: Property;
  visible: boolean;
  onHide: any;
}

const CreatePropertyModal: React.FC<ICreatePropertyModalProps> = ({
  visible,
  onHide,
  property: propertyProps,
}) => {
  const { handlePostProperty, handlePutProperty } = usePropertyState();
  const [property, setProperty] = useState<CreatePropertyDto>({
    title: propertyProps?.title || "",
    type: propertyProps?.type || "",
    zone: propertyProps?.zone || "",
    price: propertyProps?.price || 0,
    category: propertyProps?.category || "",
    description: propertyProps?.description || "",
    items: propertyProps?.items || [],
    images: propertyProps?.images || [],
    bathrooms: propertyProps?.bathrooms || 1,
    rooms: propertyProps?.rooms || 1,
    size: propertyProps?.size || 1,
    floors: propertyProps?.floors || 1,
    owner_contact: propertyProps?.owner_contact || "",
    owner_name: propertyProps?.owner_name || "",
    airbnb: propertyProps?.airbnb || "",
    isShared: propertyProps?.isShared || false,
    isNegotiable: propertyProps?.isNegotiable || false,
    code: propertyProps?.code || "",
    titleImages: propertyProps?.titleImages || [],
    captacionImages: propertyProps?.captacionImages || [],
    isActive: propertyProps?.isActive || false,
    unitPrice: propertyProps?.unitPrice || "",
    agent: propertyProps?.agent || "",
    sharedAgent: propertyProps?.sharedAgent || "",
    youtube: propertyProps?.youtube || "",
    googleMapsLink: propertyProps?.googleMapsLink || "",
  });

  const [file, setFile] = useState();
  const [imgFiles, setFiles] = useState<File[]>([]);
  const [titleImg, setTitleImg] = useState();
  const [titleImgFiles, setTitleImgFiles] = useState<File[]>([]);
  const [captImg, setCaptImg] = useState();
  const [captImgFile, setCapImgFile] = useState<File[]>([]);
  const [isSharedChecked, setIsSharedChecked] = useState(property.isShared);
  const [errors, setErrors] = useState<
    Partial<Record<keyof CreatePropertyDto, boolean>>
  >({});

  const handleInputChange = (e: any, body?: any, nm?: string) => {
    if (e?.target) {
      const { name, value } = e.target;
      setProperty((prevState) => ({
        ...prevState,
        [name]: value || body,
      }));
    }
    if (nm) {
      setProperty((prevState) => ({
        ...prevState,
        [nm]: body,
      }));
    }
  };
  // const handleInputChange = (e: any, value: any, fieldName: any) => {
  //   // Actualiza el estado del formulario
  //   setProperty({ ...property, [fieldName]: value })

  //   // Validaciones dinámicas por campo
  //   const validateField = (
  //     field: keyof CreatePropertyDto,
  //     value: any
  //   ): boolean => {
  //     switch (field) {
  //       case 'title':
  //         return value.trim() !== '' // El título no puede estar vacío
  //       case 'price':
  //         return value > 0 // El precio debe ser mayor a 0
  //       case 'zone':
  //         return value.trim() !== '' // La zona no puede estar vacía
  //       case 'type':
  //         return value.trim() !== '' // El tipo de propiedad no puede estar vacío
  //       case 'category':
  //         return value.trim() !== '' // La categoría no puede estar vacía
  //       case 'rooms':
  //         return value >= 1 // Debe tener al menos 1 habitación
  //       case 'bathrooms':
  //         return value >= 1 // Debe tener al menos 1 baño
  //       // case "description":
  //       //   return value.trim() !== ""; // La descripción no puede estar vacía
  //       case 'owner_name':
  //         return value.trim() !== '' // El nombre del propietario no puede estar vacío
  //       // case "owner_contact":
  //       //   return /^[0-9]{10}$/.test(value); // Validación simple para número de teléfono (10 dígitos)
  //       case 'images':
  //         return value.length > 0 // Debe haber al menos una imagen
  //       // case "titleImages":
  //       //   return value.length > 0; // Debe haber al menos una imagen de título
  //       case 'code':
  //         return value > 0 // El precio debe ser mayor a 0

  //       default:
  //         return true // Por defecto, no se valida
  //     }
  //   }

  //   // Verifica si el campo tiene error y lo actualiza
  //   // if (!validateField(fieldName, value)) {
  //   //   setErrors({ ...errors, [fieldName]: true })
  //   // } else {
  //   //   setErrors({ ...errors, [fieldName]: false })
  //   // }
  // }

  const handleAddItem = (item: string) => {
    let index = property?.items?.find((i) => i === item);
    let newItems: any;

    if (index) {
      newItems = property.items.filter((i) => i !== item);
      handleInputChange({}, newItems, "items");
    } else {
      if (property.items.length) {
        newItems = [...property.items, item];
      } else newItems = [item];
      handleInputChange({}, newItems, "items");
    }
  };

  const validateForm = () => {
    const requiredFields: (keyof CreatePropertyDto)[] = [
      "title", // El título no puede estar vacío
      "price", // El precio debe ser mayor a 0
      "zone", // La zona no puede estar vacía
      "type", // El tipo de propiedad no puede estar vacío
      "category", // La categoría no puede estar vacía
      // "description", // La descripción no puede estar vacía
      "rooms", // Debe tener al menos 1 habitación
      "bathrooms", // Debe tener al menos 1 baño
      "owner_name", // El nombre del propietario no puede estar vacío
      "owner_contact", // El contacto del propietario debe ser válido
      "images", // Debe haber al menos una imagen
      // "titleImages", // Debe haber al menos una imagen de título
      "code", // El código no puede estar vacío
      "agent", // El agente responsable no puede estar vacío
    ];

    const newErrors: Partial<Record<keyof CreatePropertyDto, boolean>> = {};

    requiredFields.forEach((field) => {
      if (!property[field] || property[field] === 0) {
        newErrors[field] = true; // Campo inválido
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Retorna true si no hay errores
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.current.show({
        severity: "error",
        summary: "Chequea bien ombe! faltan vainas...",
      });
      return;
    }
    try {
      if (propertyProps) {
        await handlePutProperty({
          _id: propertyProps._id,
          ...property,
          images: imgFiles.length ? imgFiles : property.images,
        });
      } else {
        await handlePostProperty({
          ...property,
          images: imgFiles,
          titleImages: titleImgFiles,
          captacionImages: captImgFile,
        });
      }
      toast.current.show({
        severity: "success",
        summary: "Todo en orden!",
      });
      // Reset the form fields
      setProperty({
        title: "",
        type: "",
        zone: "",
        price: 0,
        category: "",
        description: "",
        items: [],
        images: [],
        bathrooms: 1,
        rooms: 1,
        size: 1,
        floors: 1,
        owner_contact: "",
        owner_name: "",
        airbnb: "",
        isShared: false,
        isNegotiable: false,
        code: "",
        titleImages: [],
        captacionImages: [],
        isActive: false,
        unitPrice: "",
        agent: "",
        sharedAgent: "",
        youtube: "",
        googleMapsLink: "",
      });
      setFile(undefined);
      setFiles([]);
      onHide();
    } catch (error: any) {
      toast.current.show({
        severity: "error",
        summary: error.message,
      });
    }
  };

  const removeImage = async (image: any) => {
    console.log("IMAGE:", image);
    try {
      // DELETING IN SERVER
      if (!image?.name) {
        if (property.images.length > 0) {
          await deleteImage(propertyProps?._id!, image);
          // UPDATING STATE VALUE
          handleInputChange(
            {},
            property.images.filter((i) => i !== image),
            "images"
          );
          toast.current.show({
            severity: "success",
            summary: "Has eliminado la imagen",
          });
        }
      } else {
        setFiles((prev) => prev.filter((f) => f.name !== image.name));
        toast.current.show({
          severity: "success",
          summary: "Has eliminado la imagen",
        });
      }
    } catch (error: any) {
      toast.current.show({
        severity: "error",
        summary: error.message,
      });
    }
  };

  const renderHeader = () => {
    return (
      <span className="ql-formats">
        <button className="ql-bold" aria-label="Bold"></button>
        <button className="ql-italic" aria-label="Italic"></button>
        <button className="ql-underline" aria-label="Underline"></button>
      </span>
    );
  };

  const header = renderHeader();

  return (
    <div className="card flex justify-content-center">
      <Dialog
        className="w-[98vw]lg:w-[60vw]"
        header={
          <h3 className="text-lg font-[500] text-gray-800">
            {propertyProps ? "Actualizar" : "Crear"} propiedad
          </h3>
        }
        visible={visible}
        modal
        onHide={onHide}
      >
        <Card title="Informacion de propietario" className="mb-4">
          <div className="grid grid-cols-2 gap-4 w-full mt-4">
            {/* Nombre del Paciente */}
            <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1">
              <label className="text-sm">Nombre del propietario</label>
              <InputText
                value={property.owner_name}
                onChange={(e) =>
                  handleInputChange(e, e.target.value, "owner_name")
                }
                name="owner_name"
                placeholder="Ingrese el nombre del propietario"
                className=" w-full border rounded-md"
              />
              {/* {errors.owner_name && (
                <span className="text-red-500 text-sm">
                  Este campo es obligatorio.
                </span>
              )} */}
            </div>

            {/* PROPERTYY  TYPE */}
            <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1 !mt-0">
              <label className="text-sm">Contacto del propietario</label>
              <InputMask
                id="phone"
                mask="(999) 999-9999"
                placeholder="(809) 999-9999"
                name="owner_contact"
                onChange={(e) =>
                  handleInputChange(e, e.target.value, "owner_contact")
                }
                value={property.owner_contact}
              ></InputMask>
            </div>
            {/* {errors.owner_contact && (
              <span className="text-red-500 text-sm">
                Este campo es obligatorio.
              </span>
            )} */}
          </div>
        </Card>
        <Card title="Informacion del agente" className="mb-4">
          <div className="grid gap-4 w-full mt-4">
            {/* Nombre del Paciente */}
            <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1">
              <label className="text-sm">Nombre del agente</label>
              <InputText
                value={property.agent}
                onChange={(e) => handleInputChange(e, e.target.value, "agent")}
                name="agent"
                placeholder="Ingrese el nombre del agente"
                className=" w-full border rounded-md"
              />
              {/* {errors.agent && (
                <span className="text-red-500 text-sm">
                  Este campo es obligatorio.
                </span>
              )} */}
            </div>
          </div>
        </Card>
        <Card title="Informacion de propiedad">
          <form
            onSubmit={handleSubmit}
            className=" grid grid-cols-2 gap-4 w-full mt-4"
          >
            <div className="grid lg:grid-cols-3 col-span-2 gap-4">
              {/* Codigo de propiedad */}
              <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1">
                <label className="text-sm">Codigo de propiedad</label>
                <InputText
                  value={property.code}
                  maxLength={10}
                  onChange={(e) => handleInputChange(e, e.target.value, "code")}
                  name="code"
                  type="number"
                  placeholder="Ingrese el codigo de la propiedad"
                  className=" w-full border rounded-md"
                />
                {/* {errors.code && (
                  <span className="text-red-500 text-sm">
                    Este campo es obligatorio.
                  </span>
                )} */}
              </div>

              {/* Nombre de propiedad */}
              {/* <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1">
                <label className="text-sm">Nombre de propiedad</label>
                <InputText
                  value={property.title}
                  onChange={handleInputChange}
                  name="title"
                  placeholder="Ingrese el nombre de la propiedad"
                  className=" w-full border rounded-md"
                />
              </div> */}
              <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1 !mt-0">
                <label className="text-sm">Nombre de propiedad</label>
                <InputText
                  type="text"
                  value={property.title}
                  onChange={(e) =>
                    handleInputChange(e, e.target.value, "title")
                  }
                  className={`border p-2 rounded ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Ingrese el nombre de la propiedad"
                />
                {/* {errors.title && (
                  <span className="text-red-500 text-sm">
                    Este campo es obligatorio.
                  </span>
                )} */}
              </div>

              {/* PROPERTYY  TYPE */}
              <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1 !mt-0">
                <label className="text-sm">Tipo de propiedad</label>
                <Dropdown
                  value={property.type}
                  options={propertyTypes}
                  optionLabel="label"
                  optionValue="value"
                  name="type"
                  onChange={(e) => handleInputChange(e, e.target.value, "type")}
                />
                {/* {errors.type && (
                  <span className="text-red-500 text-sm">
                    Este campo es obligatorio.
                  </span>
                )} */}
              </div>
            </div>

            {/* CATEGORY */}
            <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1 !mt-0">
              <label className="text-sm">Categoria</label>
              <Dropdown
                value={property.category}
                options={categories}
                name="category"
                onChange={(e) =>
                  handleInputChange(e, e.target.value, "category")
                }
              />
              {/* {errors.category && (
                <span className="text-red-500 text-sm">
                  Este campo es obligatorio.
                </span>
              )} */}
            </div>

            {/* CATEGORY */}
            <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1 !mt-0">
              <label className="text-sm">Precio de propiedad</label>
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <Dropdown
                  value={property.unitPrice}
                  options={["Desde", "Mt2"]}
                  name="unitPrice"
                  placeholder="Fijo"
                  onChange={(e) =>
                    handleInputChange(e, e.target.value, "unitPrice")
                  }
                />
                <InputNumber
                  inputId="currency-us"
                  placeholder="$"
                  prefix="USD"
                  value={property.price}
                  onValueChange={(e) => handleInputChange(e, e.value, "price")}
                  mode="currency"
                  currency="USD"
                  locale="en-US"
                  className="w-full"
                />
                {/* {errors.price && (
                  <span className="text-red-500 text-sm">
                    Este campo es obligatorio.
                  </span>
                )} */}
              </div>
            </div>

            {/* INFO */}
            <div className="col-span-2 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col  space-y-2">
                <label className="text-sm">Habitaciones</label>
                <InputText
                  value={String(property.rooms)}
                  min={1}
                  type="number"
                  onChange={(e) =>
                    handleInputChange(e, e.target.value, "rooms")
                  }
                  name="rooms"
                  className="w-full border rounded-md"
                />
              </div>
              <div className="flex flex-col  space-y-2">
                <label className="text-sm">Baños</label>
                <InputText
                  value={String(property.bathrooms)}
                  min={1}
                  type="number"
                  onChange={(e) =>
                    handleInputChange(e, e.target.value, "bathrooms")
                  }
                  name="bathrooms"
                  className="w-full border rounded-md"
                />
              </div>
              <div className="flex flex-col  space-y-2">
                <label className="text-sm">Pisos</label>
                <InputText
                  value={String(property.floors)}
                  min={1}
                  type="number"
                  onChange={(e) =>
                    handleInputChange(e, e.target.value, "floors")
                  }
                  name="floors"
                  className=" w-full border rounded-md"
                />
              </div>
              <div className="flex flex-col  space-y-2">
                <label className="text-sm">Tamaño</label>
                <InputText
                  value={String(property.size)}
                  min={1}
                  type="number"
                  onChange={(e) => handleInputChange(e, e.target.value, "size")}
                  name="size"
                  className="w-full border rounded-md"
                />
              </div>
            </div>

            {/* Location */}
            <div className="col-span-2 gap-4 w-full">
              <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1 !mt-0">
                <label className="text-sm">Zona</label>
                <Dropdown
                  value={property.zone}
                  onChange={(e) => handleInputChange({}, e.value, "zone")}
                  options={provincias}
                  optionLabel="label"
                  optionGroupLabel="label"
                  optionGroupChildren="items"
                  placeholder="Selecciona una zona"
                  className="w-full"
                  filter
                />
              </div>
            </div>

            {/* PLUS */}
            <div className="col-span-2 grid md:grid-cols-3 gap-4 w-full ">
              <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1 !mt-0">
                <label className="text-sm">Airbnb</label>
                <Inplace closable>
                  <InplaceDisplay>{`Airbnb ${
                    property.airbnb ? "online" : "Link"
                  }`}</InplaceDisplay>
                  <InplaceContent>
                    <InputText
                      value={property.airbnb}
                      onChange={(e) =>
                        handleInputChange(e, e.target.value, "airbnb")
                      }
                      autoFocus
                      name="airbnb"
                      className="w-[80%]"
                    />
                  </InplaceContent>
                </Inplace>
              </div>
              <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1 !mt-0 ">
                <label className="text-sm">Negociable</label>
                <Checkbox
                  onChange={(e) =>
                    handleInputChange(e, e.checked, "isNegotiable")
                  }
                  checked={property.isNegotiable}
                  className="border-2 border-blue-400"
                ></Checkbox>
              </div>
              <div className="">
                <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1 !mt-0">
                  <label className="text-sm">Captacion compartida</label>
                  <Checkbox
                    onChange={(e) => {
                      setIsSharedChecked(e.checked!);
                      handleInputChange(e, e.checked, "isShared");
                    }}
                    checked={property.isShared}
                    className="border-2 border-blue-400"
                  ></Checkbox>
                </div>
                {/* InputText Condicional */}
                {isSharedChecked && (
                  <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1 mt-4">
                    <label className="text-sm">
                      Nombre del captador o compañia
                    </label>
                    <InputText
                      placeholder="Ingresa el nombre"
                      onChange={(e) =>
                        handleInputChange(e, e.target.value, "sharedAgent")
                      }
                      className="border-2 border-gray-300 p-2"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1 !mt-0">
              <label className="text-sm">Youtube</label>
              <Inplace closable>
                <InplaceDisplay>{`Youtube ${
                  property.youtube ? "online" : "Link"
                }`}</InplaceDisplay>
                <InplaceContent>
                  <InputText
                    value={property.youtube}
                    onChange={(e) =>
                      handleInputChange(e, e.target.value, "youtube")
                    }
                    autoFocus
                    name="youtube"
                    className="w-[80%]"
                  />
                </InplaceContent>
              </Inplace>
            </div>
            <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1 !mt-0">
              <label className="text-sm">Maps link</label>
              <Inplace closable>
                <InplaceDisplay>{`googleMapsLink ${
                  property.googleMapsLink ? "online" : "Link"
                }`}</InplaceDisplay>
                <InplaceContent>
                  <InputText
                    value={property.googleMapsLink}
                    onChange={(e) =>
                      handleInputChange(e, e.target.value, "googleMapsLink")
                    }
                    autoFocus
                    name="googleMapsLink"
                    className="w-[80%]"
                  />
                </InplaceContent>
              </Inplace>
            </div>

            {/* EDITOR */}
            <div className="card col-span-2">
              <label className="text-sm">Descripcion</label>
              <Editor
                value={property.description}
                name="description"
                onTextChange={(e) =>
                  handleInputChange(e, e.htmlValue, "description")
                }
                headerTemplate={header}
                style={{ height: "320px" }}
              />
            </div>

            {/* Caracteristicas */}
            <div className="flex flex-col col-span-2  space-y-2">
              <label className="text-sm">Caracteristicas</label>
              <div className="grid  gap-2">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-sm">
                  {propertyFeatures.map((i) => (
                    <label
                      className="flex items-center gap-8"
                      onClick={() => handleAddItem(i.value)}
                    >
                      <input type="checkbox" className="!p-2" /> {i.label}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Imagenes */}
            <div className="flex flex-col col-span-2   space-y-2">
              <label className="text-sm">Imagenes</label>
              <UploadFile
                setFiles={setFile}
                imgFiles={setFiles}
                imageId="add-single-img"
                containerClass="custom__image-container"
                labelId="add-img-label"
                images={property.images}
                removeImage={(item: any) => removeImage(item)}
              />
            </div>

            {/* Titulo */}
            <div className="flex flex-col col-span-2   space-y-2">
              <label className="text-sm">Titulo de propiedad</label>
              <UploadFile
                setFiles={setTitleImg}
                imgFiles={setTitleImgFiles}
                images={property.titleImages}
                imageId="add-single-titleimg"
                containerClass="custom__image-container-title"
                labelId="add-img-titlelabel"
              />
            </div>

            {/* ACUERDO CAPTACION */}
            <div className="flex flex-col col-span-2   space-y-2">
              <label className="text-sm">Acuerdo de captacion</label>
              <UploadFile
                setFiles={setCaptImg}
                imgFiles={setCapImgFile}
                images={property.captacionImages}
                imageId="add-single-captacionimg"
                containerClass="custom__image-container-captacion"
                labelId="add-img-captacionlabel"
              />
            </div>

            <SelectButton
              value={property.isActive ? "Publicar" : "Oculto"}
              onChange={(e: any) =>
                handleInputChange(
                  {},
                  e.value === "Oculto" ? false : true,
                  "isActive"
                )
              }
              options={["Publicar", "Oculto"]}
            />
            {/* Botón de Enviar */}
            <div className="flex justify-center col-span-2">
              <Button
                // onClick={confirm1}
                text={`${propertyProps ? "Actualizar" : "Crear"} Propiedad`}
                className="p-button p-button-rounded w-full"
              />
            </div>
          </form>
        </Card>
      </Dialog>
    </div>
  );
};

export default CreatePropertyModal;
