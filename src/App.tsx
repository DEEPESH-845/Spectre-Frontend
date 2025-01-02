
import Logo from './components/Logo';
import RegistrationForm from './components/RegistrationForm';
import SocialLinks from './components/SocialLinks';
import * as backgroundImage from 'https://ibb.co/qjjLC4Z';

function App() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col">
        <Logo />
        <div className="mt-10 md:mt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6">Spectre</h1>
          <p className="text-gray-400 text-base md:text-lg max-w-md">
            Welcome to the virtual arena of Spectre CTF—a world where the lines between reality and
            imagination blur, and your skills are your most powerful weapon.
          </p>
          <SocialLinks />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-black/30 backdrop-blur-sm p-6 md:p-12 flex items-center justify-center">
        <RegistrationForm />
      </div>

      {/* Background Image */}
      <div 
        className="fixed inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: 'url("https://ibb.co/qjjLC4Z")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
    </div>
  );
}

export default App;