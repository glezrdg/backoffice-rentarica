import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "../../../../components/shared";
import { getProperties, postProperty } from "../../services";
import { Calendar } from "primereact/calendar";
import { usePropertyState } from "../../context";
import { Editor } from "primereact/editor";
import UploadFile from "../../../../components/shared/UploadFile";
import {
  categories,
  propertyTypes,
  provincias,
} from "../../../../utility/data";
import { Property } from "../../models/property.model";
import { toast } from "../../../../App";
import { on } from "events";

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
  const [property, setProperty] = useState({
    title: propertyProps?.title || "",
    type: propertyProps?.type || "",
    province: propertyProps?.province || "",
    price: propertyProps?.price || 0,
    category: propertyProps?.category || "",
    description: propertyProps?.description || "",
    items: propertyProps?.items || [""],
    images: propertyProps?.images || [],
    bathrooms: propertyProps?.bathrooms || 1,
    rooms: propertyProps?.rooms || 1,
    size: propertyProps?.size || 1,
    floors: propertyProps?.floors || 1,
  });

  const [text, setText] = useState<any>(
    "<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>"
  );
  const [file, setFile] = useState();
  const [imgFiles, setFiles] = useState<File[]>([]);

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (propertyProps) {
        await handlePutProperty({ _id: propertyProps._id, ...property });
      } else {
        await handlePostProperty({ ...property, images: imgFiles });
      }
      toast.current.show({
        severity: "success",
        summary: "Todo en orden!",
      });
      // Reset the form fields
      setProperty({
        title: "",
        type: "",
        province: "",
        price: 0,
        category: "",
        description: "",
        items: [""],
        images: [],
        bathrooms: 1,
        rooms: 1,
        size: 1,
        floors: 1,
      });
      setText(
        "<div>Hello World!</div><div>PrimeReact <b>Editor</b> Rocks</div><div><br></div>"
      );
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
        <>
          <form
            onSubmit={handleSubmit}
            className="space-y-6 grid grid-cols-2 gap-4 bg-white shadow-lg rounded-lg p-6 w-full"
          >
            {/* Nombre del Paciente */}
            <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1">
              <label className="text-sm">Nombre de propiedad</label>
              <InputText
                value={property.title}
                onChange={handleInputChange}
                name="title"
                placeholder="Ingrese el nombre de la propiedad"
                className=" w-full border rounded-md"
              />
            </div>

            {/* PROPERTYY  TYPE */}
            <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1 !mt-0">
              <label className="text-sm">Tipo de propiedad</label>
              <Dropdown
                value={property.type}
                options={propertyTypes}
                name="type"
                onChange={handleInputChange}
              />
            </div>

            {/* CATEGORY */}
            <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1 !mt-0">
              <label className="text-sm">Categoria</label>
              <Dropdown
                value={property.category}
                options={categories}
                name="category"
                onChange={handleInputChange}
              />
            </div>

            {/* CATEGORY */}
            <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1 !mt-0">
              <label className="text-sm">Precio de propiedad</label>
              <div className="flex flex-col md:flex-row gap-4 w-full">
                <Dropdown
                  value={property.category}
                  options={["Fijo", "Desde", "Mt2"]}
                  name="category"
                  onChange={handleInputChange}
                />
                <InputNumber
                  inputId="currency-us"
                  value={property.price}
                  onValueChange={(e) => handleInputChange(e, e.value, "price")}
                  mode="currency"
                  currency="USD"
                  locale="en-US"
                />
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
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
                  onChange={handleInputChange}
                  name="size"
                  className="w-full border rounded-md"
                />
              </div>
            </div>

            {/* Location */}
            <div className="col-span-2 gap-4 grid lg:grid-cols-3 w-full">
              <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1 !mt-0">
                <label className="text-sm">Provincia</label>
                <Dropdown
                  className="w-full"
                  value={property.province}
                  options={provincias}
                  name="province"
                  onChange={handleInputChange}
                  filter
                />
              </div>
              <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1 !mt-0">
                <label className="text-sm">Municipio</label>
                <Dropdown
                  className="w-full"
                  value={property.category}
                  options={categories}
                  name="category"
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex flex-col space-y-2 col-span-2 lg:col-span-1 !mt-0">
                <label className="text-sm">Sector</label>
                <Dropdown
                  className="w-full"
                  value={property.category}
                  options={categories}
                  name="category"
                  onChange={handleInputChange}
                />
              </div>
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
                  <label className="flex items-center gap-8">
                    {" "}
                    <input type="checkbox" className="!p-2" /> Piscina
                  </label>
                  <label className="flex items-center gap-8">
                    {" "}
                    <input type="checkbox" className="!p-2" /> Jacuzzi | Picuzzi
                  </label>
                  <label className="flex items-center gap-8">
                    {" "}
                    <input type="checkbox" className="!p-2" /> Jardin
                  </label>
                  <label className="flex items-center gap-8">
                    {" "}
                    <input type="checkbox" className="!p-2" /> Patio
                  </label>
                  <label className="flex items-center gap-8">
                    {" "}
                    <input type="checkbox" className="!p-2" /> Terraza
                  </label>
                  <label className="flex items-center gap-8">
                    {" "}
                    <input type="checkbox" className="!p-2" /> Garaje
                  </label>
                  <label className="flex items-center gap-8">
                    {" "}
                    <input type="checkbox" className="!p-2" /> Balcon
                  </label>
                  <label className="flex items-center gap-8">
                    {" "}
                    <input type="checkbox" className="!p-2" /> Gimnasio
                  </label>
                  <label className="flex items-center gap-8">
                    {" "}
                    <input type="checkbox" className="!p-2" /> Areas deportivas
                  </label>
                  <label className="flex items-center gap-8">
                    {" "}
                    <input type="checkbox" className="!p-2" /> Area de juego
                    para niños
                  </label>
                  <label className="flex items-center gap-8">
                    {" "}
                    <input type="checkbox" className="!p-2" /> Cancha de Tenis
                  </label>
                  <label className="flex items-center gap-8">
                    {" "}
                    <input type="checkbox" className="!p-2" /> Cancha de
                    Basketball
                  </label>
                  <label className="flex items-center gap-8">
                    {" "}
                    <input type="checkbox" className="!p-2" /> Cancha de Padel
                  </label>
                  <label className="flex items-center gap-8">
                    {" "}
                    <input type="checkbox" className="!p-2" /> Cancha de Squash
                  </label>
                </div>
              </div>
            </div>

            {/* Imagenes */}
            <div className="flex flex-col col-span-2   space-y-2">
              <label className="text-sm">Imagenes</label>
              <UploadFile
                setFiles={setFile}
                imgFiles={setFiles}
                images={property.images}
              />
            </div>

            {/* Botón de Enviar */}
            <div className="flex justify-center col-span-2">
              <Button
                text={`${propertyProps ? "Actualizar" : "Crear"} Propiedad`}
                className="p-button p-button-rounded w-full"
              />
            </div>
          </form>
        </>
      </Dialog>
    </div>
  );
};

export default CreatePropertyModal;
