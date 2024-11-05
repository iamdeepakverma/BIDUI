import React from "react";
import { CheckCircle,XCircle,X } from "lucide-react";
import { Dialog } from "@mui/material";

const ModalPopup = ({ open, handleClose, message,icon }) => { // Destructure props here

    // const handleClickClose = () => {
    //     setOpen(false);
    //   };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div  className="flex justify-end p-2 bg-white"> 
        <X onClick={handleClose}  className=" text-red-500 cursor-pointer" />
        </div>
        <div className="flex items-center justify-center bg-gray-100">
          <div className="p-8 bg-white rounded-lg shadow-lg text-center">
            <div className="mb-2 flex justify-center">
              {/* <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" /> */}
              {/* {message?.icon || "success"} */}
              {icon}
              {/* <XCircle className="w-16 h-16 text-red-500 animate-bounce" /> */}
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {message?.title || "Title"} {/* Fallback in case message is undefined */}
            </h1>
            <p className="text-gray-600 mb-6">
              {message?.content || "Content goes here"} {/* Fallback for undefined content */}
            </p>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ModalPopup;
