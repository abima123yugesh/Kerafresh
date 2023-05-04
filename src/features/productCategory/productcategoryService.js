import axios from "axios";
import { base_url } from "../../utils/base_url";

const getProductCategories = async () => {
    const response = await axios.get(`${base_url}productcategory`)
    return response.data
}

const updateProductCategories = async (Cat) => {
    try{
        const response = await axios.put(
            `${base_url}productcategory/${Cat.id}`,
            { title: Cat.CatData.title,
                images: Cat.CatData.images,
            },
            
        )
        return response.data
    } catch (error) {
        throw new Error(error)
    }
}

const getaCategory = async (id) => {
    try {
    const response = await axios.get(`${base_url}productcategory/${id}`)
    return response.data;
    } catch (error) {
        throw new Error(error)
    }
}

const productcategoryService = {
    getProductCategories,
    updateProductCategories,
    getaCategory
}

export default productcategoryService