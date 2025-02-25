

const  Buttons = ({btnType,btnText,handler}) =>{

    
      
if (btnType === 'success'){
    return <button className='btn btn-success buttton' onClick={handler}>{btnText}</button>;
}

else if (btnType === 'danger'){
    return <button className='btn btn-danger buttton' onClick={handler}>{btnText}</button>;
}
else {
    return <button className='btn btn-primary buttton' onClick={handler}>{btnText}</button>;
}

    

};

export default Buttons;
