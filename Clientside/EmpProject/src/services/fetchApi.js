import commonApi from "./commonApi";

export const getEmployees = () => {
    return commonApi("GET", "", "http://127.0.0.1:8000/api/employees/", "");
}
export const deleteEmployees=(id)=>{
    return commonApi("DELETE","",`http://127.0.0.1:8000/api/employees/${id}/`,"")
}
