type statusProps = {
status:"loading" | "success" | "error"
}

function Status(props: statusProps) {
    let message
    if(props.status === "loading"){
        message = "loading..."
    }else if(props.status === 'success'){
        message = "loaded successfuly"
    }else if(props.status === "error"){
        message = "error while loading"

    }
  return (
    <div>

    <h2>{message}..</h2>
    </div>
   
  )
}

export default Status