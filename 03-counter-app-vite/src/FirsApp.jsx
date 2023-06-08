import ProTypes from 'prop-types'; 

export const FirsApp = ( {title, subTitle} ) => {
    
   // console.log(props); 
    return (
        <>
            <h1>{ title }</h1>
            <p>{subTitle}</p>
        </>
        )

};

FirsApp.ProTypes = {
    title: ProTypes.string.isRequired,
    subTitle: ProTypes.number.isRequired,
};

