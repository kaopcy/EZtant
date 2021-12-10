import Swal from "sweetalert2";
export default function (){
    const loading = (text)=>{
        Swal.fire({
            title: 'Please Wait !',
            html: text,// add html attribute if you want or remove
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading()
            },
        });
    }
    const finish = (text)=> {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: text,
            showConfirmButton: false,
            timer: 1000,
        })
    }

    const error = (text , error)=>{
        Swal.fire({
            icon: "error",
            title: text,
            text: error.message,
        });
    }

    return { loading , finish , error }
}