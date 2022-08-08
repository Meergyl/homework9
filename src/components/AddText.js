import Form from "./Form"



const AddText = (props) => {
    const saveData = (enteredData) => {
        const data = {
            ...enteredData,
            id:Math.random().toString(),
            date:new Date().toLocaleDateString()
        }
        props.onDataHandler(data)
    }
    return (
        <>
            <Form onDataHandler = {saveData}/>
        </>
    )
}

export default AddText;