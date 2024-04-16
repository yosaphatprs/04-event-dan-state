"use client"
import Accordion from "@/component/accordion";
import Tombol_1, { Tombol_2, Tombol_3 } from "@/component/button";
import Messenger from "@/component/chat";
import Form, { Form_2 } from "@/component/form";
import Gallery from "@/component/gallery";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <h2>Kuis Kota </h2>
        <Tombol_1 />
        <hr></hr>
        <Tombol_2 isiPesan="Ini Pesanku" namaTombol="Pesan" />
      </div>
      <br></br>
      <div className="bg-red-300" onClick={() => alert('Parent Element : Div')}>
        <Tombol_3 isiPesan="Child Elemen: Tombol-1" namaTombol="Tombol 1" />
        <Tombol_3 isiPesan="Child Elemen: Tombol-2" namaTombol="Tombol 2" />
      </div>
      <br></br>
      <Gallery />
      <br></br>
      <Form />
      <br></br>
      <Form_2 />
      <br></br>
      <Accordion />
      <br></br>
      <Messenger />
    </>
  )
}