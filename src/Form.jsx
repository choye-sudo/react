const Form = () =>{
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e);

        //key value 추출
        const key = e.target.name;
        // obj 생성
        const obj = {[key]:e.target.age};

        console.log(obj);
    }

    return <form onSubmit={onSubmitHandler}>
        <input name="name" required/>
        <br/>
        <input name="age"/>
        <br/>
        <input type="submit"/>
    </form>
}

export default Form;