// assets.ts
import heallar from './heallar.png';
import doctor from './doctor.jpg';
import caduceus from './caduceus.svg';
import cardiogram from './cardiogram.svg';
import drug from './drug.svg';
import medkit from './medkit.svg';
import medscope from './medscope.svg';
import play from './play-button-svgrepo-com.svg';
import playcircle from './playcirce.svg';
import write from './write.svg';

interface Assets {
    heallar: string;
    doctor: string;
    caduceus: string;
    cardiogram: string;
    drug: string;
    medkit: string;
    medscope: string;
    play: string;
    playcircle: string;
    write: string;
}

export const assets: Assets = {
    caduceus,
    cardiogram,
    drug,
    medkit,
    medscope,
    play,
    playcircle,
    write,
    heallar: '',
    doctor: ''
};
