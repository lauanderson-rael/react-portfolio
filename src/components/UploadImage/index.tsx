import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

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
    } catch (error) {
      console.error('Erro ao enviar a imagem:', error);
      alert("Erro ao enviar imagem!")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button style={{background: 'green', padding: '2px 3px', color: '#fff', marginLeft: '5px'}} type="submit">Enviar Imagem</button>
    </form>
  );
};

export default ImageUpload;