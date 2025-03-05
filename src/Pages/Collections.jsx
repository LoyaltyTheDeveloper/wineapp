import React from 'react'
import wine1 from '/Wine.jpg';
import wine2 from '/Wine2.jpg';
import wine3 from '/Wine3.jpg';
import wine4 from '/Wine4.jpg';
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



function Collections() {
    useEffect(() => {
            AOS.init({ duration: 1000, once: true }); 
          }, []);
    
    const wines = [
        { image: wine1, title: "Blanc de Nuit, Vin de France 2023 Les Domaines de Clos Bel Air" },
        { image: wine2, title: "Château Margaux 2015 Premier Grand Cru Classé" },
        { image: wine3, title: "Domaine de la Romanée-Conti La Tâche Grand Cru 2018" },
        { image: wine4, title: "Opus One Napa Valley 2019" }
      ];
      
      const [open, setOpen] = useState(false);
      const [selectedWine, setSelectedWine] = useState(null);
    
      const handleClickOpen = (wine) => {
        setSelectedWine(wine);
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
        setSelectedWine(null);
      };
    



  return (<>
    <div className='bg-[#F9F9F9] pb-10'>
      <div className='text-[25px] lg:text-[30px] flex justify-center pt-8 font-bold font-bitter' data-aos='fade-down'>Les Domaines de Clos Bel Air</div>

      <div className='pt-8'>

        {/* Card */}

<div className="flex flex-wrap justify-center gap-y-14 lg:gap-x-10">
      {wines.map((wine, index) => (
        <div key={index} className="w-64 flex flex-col items-center">
          <div>
            <img src={wine.image} className="object-cover h-[300px] w-[250px]" data-aos="fade-in" />
          </div>
          <div className="font-semibold text-center h-12" data-aos="fade-down">{wine.title}</div>
          <div className="mt-2" data-aos="fade-down">
            <button 
              onClick={() => handleClickOpen(wine)} 
              className="bg-blue-600 px-[20px] lg:px-[35px] py-[15px] text-[11px] lg:text-[14px] text-white"
            >
              INQUIRE NOW
            </button>
          </div>
        </div>
      ))}

      {/* Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent className="p-6 flex flex-col lg:flex-row gap-6">
          {/* Wine Image */}
          {selectedWine && (
            <div className="w-full lg:w-1/2 flex justify-center">
              <img src={selectedWine.image} alt={selectedWine.title} className="object-cover w-full max-w-[300px] rounded-md" />
            </div>
          )}

          {/* Form Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl font-semibold mb-4">{selectedWine?.title}</h2>

            <form className="space-y-4">
              <div className="flex flex-col lg:flex-row gap-4">
                <input type="text" placeholder="First Name" className="border p-3 rounded-md lg:w-1/2" />
                <input type="text" placeholder="Last Name" className="border p-3 rounded-md lg:w-1/2" />
              </div>
              <input type="number" placeholder="Phone Number" className="border p-3 rounded-md w-full" />
              <input type="email" placeholder="Email" className="border p-3 rounded-md w-full" />
              <textarea placeholder="How can we help you?" className="w-full p-3 border border-gray-300 rounded-md" rows="3" />
            </form>
          </div>
        </DialogContent>

        <DialogActions className="p-4">
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Submit Inquiry
          </Button>
        </DialogActions>
      </Dialog>
    </div>

      </div>
    </div>
  </>)
}

export default Collections
