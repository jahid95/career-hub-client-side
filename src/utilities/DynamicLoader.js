
export const dynamicLoadData = async (id) => { 
    console.log(id);   
        const productsData = await fetch('../jobs.json')
        const products = await productsData.json()
        console.log(products)
        const findData = products.find(product=> product.id == id);
        console.log(findData)
        return findData;
       
}

export default dynamicLoadData;