function ResumeUpload(){
    return (
        <div className="border p-8 rounded-lg">
            <input
            type="file"
            className="mb-4"
            />

            <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            >
Upload Resume
            </button>

        </div>
    );
}

export default ResumeUpload;