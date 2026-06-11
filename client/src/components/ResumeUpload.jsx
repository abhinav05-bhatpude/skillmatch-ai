import { useState } from "react";

function ResumeUpload() {

const [file,setFile] =
useState(null);

const handleFileChange =
(e)=>{

setFile(
e.target.files[0]
);

};

return (

<div className="border p-8 rounded-lg">

<input
type="file"
accept=".pdf"
onChange={
handleFileChange
}
/>

<p className="mt-4">

{file
? file.name
: "No file selected"}

</p>

</div>

);

}

export default ResumeUpload;