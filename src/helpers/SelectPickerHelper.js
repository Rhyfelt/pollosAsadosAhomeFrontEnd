const SelectPickerHelper = {
     convertNewAddressObjectIntoString: (addressObject) =>{
        const {colonia, calleNumero,entreCalles} = {...addressObject}
        let direccion = `Colonia ${colonia}, ${calleNumero}, ${entreCalles} `
        return direccion
    },
    convertListOfAdressObjectsIntoString: (addressObjectList) => {
        let listOfStringAddresses = addressObjectList.map(addressObject =>  SelectPickerHelper.convertNewAddressObjectIntoString(addressObject))
        return listOfStringAddresses
    }
}

export default SelectPickerHelper