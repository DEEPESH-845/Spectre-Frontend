

import logo from '/Public/logo.png' ;

const Logo = () => {
  return (
    <div className="flex items-center mt-1 md:mt-20 gap-2">
      
      <img src={logo} alt="Description of the image" className="w-100 h-20" />
      
    </div>
  );
};

export default Logo;