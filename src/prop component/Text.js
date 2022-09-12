import React, { useState } from 'react'


export default function Text(prop) {


//states

    const [text, setText] = useState("");

        const [boldText, setBoldText] = useState({
    fontWeight : 400,
    });



// functions



    const upCase = () => {
        const newText = text.toUpperCase();
        setText(newText)
    }
    const loCase = () => {
        const newText = text.toLowerCase();
        setText(newText)
    }
    const change = (e) => {
        setText(e.target.value);
    }
 

const clear = ()=>{
    let val = ""
    setText(val)
}



const bold = ()=>{
    if(boldText.fontWeight === 400){
        setBoldText({
            fontWeight : 'bold'
        })
    }else{
        setBoldText({
            fontWeight : 400
        })
    }
}


const italic = ()=>{
    if(boldText.fontWeight === 400 || boldText.fontWeight === 'bold'){
        setBoldText({
            fontStyle : 'italic'
        })
    }else{
        setBoldText({
            fontStyle : 'normal'
        })
    }
}
 

const copy = ()=>{
 let doc = document.getElementById("exampleFormControlTextarea1")
doc.select()
navigator.clipboard.writeText(doc.value)
document.getSelection().removeAllRanges()
prop.showAlert("copied to clipboard")
}



//Component

    return (
        <>
            <div>
                <h1 className='mt-5'>{prop.heading}</h1>
                <div className="container">

                    <div className="form-group">
                        <textarea className="form-control" style={boldText} value={text} onChange={change} id="exampleFormControlTextarea1" rows="10"></textarea>
                    </div>
                    <button className="btn btn-primary my-1" onClick={upCase}>UpperCase</button>
                    <button className="btn btn-primary ml-2 my-1" onClick={loCase}>LowerCase</button>
                    <button className="btn btn-primary ml-2 my-1" onClick={bold}>B</button>
                    <button className="btn btn-primary ml-2 my-1" onClick={italic}>I</button>
                    <button className="btn btn-primary my-2 mx-3 my-1" onClick={clear}>Clear all</button>
                    <button className="btn btn-primary my-1" onClick={copy}>Copy Text</button>
                    
                    
                    
                    <h2 className='mt-5'>Words and Character</h2>
                    <p>{text.split(" ").filter((element)=> {return element.length !==0}).length} Words and {text.length} Characters</p>

                    <h2 className='mt-5'>Preview</h2>
                    <p>{text}</p>
                </div>

            </div>

        </>

    )
}