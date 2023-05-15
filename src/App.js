import React from "react";
import Header from './Header';
import Content from "./Content";

import Cards from "./Cards"
import Card from "./Card"

import cep from "./img/Cep.png";
import calculadora from "./img/calculadora.png"

function App(){
    return (
        <>
            <Header titulo="Hello World" subtitulo="Testando" className="header"/>
            
            <Content titulo="Bem vindo">  
                <p>Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem sido o texto fictício padrão da indústria desde os anos 1500, quando um impressor desconhecido pegou uma cozinha de tipos e embaralhou-a para fazer um livro de espécimes de tipos. Ele sobreviveu não apenas cinco séculos, mas também o salto para a composição eletrônica, permanecendo essencialmente inalterado. Foi popularizado na década de 1960 com o lançamento de folhas Letraset contendo passagens de Lorem Ipsum e, mais recentemente, com software de editoração eletrônica como Aldus PageMaker, incluindo versões de Lorem Ipsum.</p>

                <Cards>

                    <Card
                        imagem = {cep}
                        titulo="teste" 
                        texto="Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem o texto fictício padrão da indústria desde os anos 1500">                   
                    </Card> 

                    <Card 
                        imagem = {calculadora}
                        titulo="teste" 
                        texto="Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem o texto fictício padrão da indústria desde os anos 1500">
                    
                    </Card> 

                    <Card 
                        imagem = {cep}
                        titulo="teste" 
                        texto="Lorem Ipsum é simplesmente um texto fictício da indústria tipográfica e de impressão. Lorem Ipsum tem o texto fictício padrão da indústria desde os anos 1500">
                    
                    </Card> 
                </Cards>
            </Content>
        </>
    )
}

export default App
