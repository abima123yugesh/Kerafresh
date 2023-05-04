import axios from "axios";
import { base_url } from "../../utils/base_url";

const enquiry = async (data) => {
    try{
    const response = await axios.post(`${base_url}enquiry`, data)
    return response.data
    } catch (error) {
        throw new Error(error)
    }
}

const enquiryService = {
    enquiry
}

export default enquiryService