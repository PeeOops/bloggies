import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ModalMessage = ({message, setMessage}) => {

    const navigate = useNavigate();
    const dialogRef = useRef();

    useEffect(() => {
        if(message){
            dialogRef.current?.showModal();
        }else{
            dialogRef.current?.close();
        }
    },[message])

    const handleClickContinue = () => {
        if(message === "You need to be logged in to perform this action."){
            navigate("/login");
        }else if(message === "Post added successfully" || message === "Post deleted successfully" || message === "Post updated successfully"){
            window.location.reload();
        }else{
            dialogRef.current?.close();
            setMessage("");
        }
    }

    return(
        <dialog ref={dialogRef} className="flex flex-col bg-white text-emerald-950 border-2 border-emerald-950 m-auto mt-4 p-4 w-96 h-24 md:w-96 animate-bounce" >
            <p className="text-base">Message: {message}</p>
            <button role="button" onClick={() => handleClickContinue()} className="cursor-pointer rounded-md border-1 border-emerald-950 w-24 right-0 bottom-0 absolute m-2 hover:bg-emerald-950 hover:text-white">Continue</button>
        </dialog>
    )
}

export default ModalMessage;