const TemplateExpressions = () => {

    const name = 'Jhonathas';
    const data = {
        age: 18,
        job: 'Programmer',
    };
    return(
        <div>
            <p>Bom dia {name}, tudo bem?</p>
            <p>Você atua como {data.job}</p>
            <p>E sua idade é {data.age}</p>
        </div>
    );
};

export default TemplateExpressions;