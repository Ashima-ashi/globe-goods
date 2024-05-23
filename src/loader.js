import React from 'react';

const loader = () => {
    // let [loading, setLoading] = useState(false);
    // useEffect(()=>{
    //   setLoading(true);
    //   setTimeout(() => {
    //     setLoading(false)
        
    //   }, 5000);
    // },[])
  return (
    <div>
        <ClimbingBoxLoader
          color="#af7747"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh", 
            width: "100vw", 
          }}

          loading
          size={130}
          speedMultiplier={2}
        />
      
    </div>
  );
}

export default loader;
