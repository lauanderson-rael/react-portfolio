import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { Container } from './styles';
import { IoMdSend } from "react-icons/io";

const ImageUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!selectedFile) {
      console.error('Nenhum arquivo selecionado');
      return;
    }

    const formData = new FormData();
    formData.append('imagem', selectedFile); // 'image' deve ser a mesma chave que você usa no back-end

    try {
    const api = import.meta.env.VITE_API_URL + '/upload'
      const response = await axios.post(api, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Imagem enviada com sucesso:', response.data);

      alert("imagem enviada!")
      window.location.reload()

    } catch (error) {
      console.error('Erro ao enviar a imagem:', error);
      alert("Erro ao enviar imagem!")
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />

        <button type="submit"> Enviar Imagem <IoMdSend/></button>
      </form>
    </Container>
  );
};

export default ImageUpload;
