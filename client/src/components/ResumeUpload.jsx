import { useState } from "react";
import { uploadResume } from "../services/resumeApi";

function ResumeUpload() {

const [file,setFile] =
useState(null);
const [loading,setLoading] = useState(false);

const handleFileChange =
(e)=>{

setFile(
e.target.files[0]
);

};
const handleUpload = async()=> {
    if(!file) return;

    try{
        setLoading(true);

        const formData=new FormData();
        formData.append("resume",file);

        await uploadResume(formData);

        alert("Resume Uploaded");
    } catch(error){
        console.log(error);
    } finally{
        setLoading(false);
    }
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