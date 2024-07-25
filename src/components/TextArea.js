import React , {useState} from 'react'

export default function TextArea(props) {


  const handelUpclick = ()=>{
    // console.log("clicked UpperCase");
    if(text){
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upperCase!","success");}
    else {
      props.showAlert("Textarea is empty!", "warning"); // Or any message you prefer
    }
}

const handelLoclick = ()=>{
  if (text) {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!", "success");
  } else {
    props.showAlert("Textarea is empty!", "warning"); // Or any message you prefer
  }
}

const handleClearclick = ()=>{
  if(text){
  // console.log("clicked UpperCase");
  let newText = '';
  setText(newText);
  props.showAlert("Clear successfully!","success");}
  else{
    props.showAlert("Textarea is empty!", "warning"); // Or any message you prefer
  }
}

const handleCopyclick = ()=>{
 if (text) {
  navigator.clipboard.writeText(text);
  props.showAlert("Text has been copy!","success");
 }
 else{
  props.showAlert("Textarea is empty!", "warning"); // Or any message you prefer
 }
}

const handleSpeech = ()=>{
  if (text) {
    const speechSynthesis = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(utterance);
   }
   else{
    props.showAlert("Textarea is empty!", "warning"); 
   }
}


const handelOnchange = (event)=> {
    // console.log("On change");
    setText(event.target.value);
}

const handleEmptySpace = () => {
  if (text) {
    let newText = text.replace(/\s+/g, ' ').trim();
    setText(newText);
    props.showAlert('Extra spaces removed!', 'success');
  } else {
    props.showAlert('Textarea is empty!', 'warning'); // Or any message you prefer
  }
}

    const [text,setText] = useState("");
  return (

    <>
    <div className="container" style={{color: props.mode==='light'? 'black' : 'white'}}>
        <h1>{props.Heading}</h1>
    <div>
       <div className="mb-3">
        <textarea className="form-control my-3" value={text} id="my-box" rows="8" onChange={handelOnchange} style={{backgroundColor: props.mode==='light'? 'white' : '#9684b0'}}></textarea>
        </div>
        <button type="button" className="btn btn-primary mx-3 my-3" onClick={handelUpclick}>Convert To UpperCase</button>
        <button type="button" className="btn btn-primary mx-3 my-3" onClick={handelLoclick}>Convert To Lowercase</button>
        <button type="button" className="btn btn-primary mx-3" onClick={handleClearclick}>Clear text</button>
        <button type="button" className="btn btn-primary mx-3 my-3" onClick={handleCopyclick}>Copy</button>
        <button type="button" className="btn btn-primary mx-3 my-3" onClick={handleEmptySpace}>Remove Extraspaces</button>
        <button type="button" className="btn btn-primary mx-3 my-3" onClick={handleSpeech}>Speech</button>
    </div>
    </div>


    <div className="container"  style={{color: props.mode==='light'? 'black' : 'white'}}>
      <h1 className='my-3'>Your Text Summary</h1>
      

      <p>
  {text.length === 0 ? (
    "The textarea is empty."
  ) : (
    <>
      {text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} characters.
    </>
  )}
</p>




      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes to Read.</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"enter somethig above textarea to preview"}</p>
    </div>
    </>
  )
}
