import toSelectDB from './modules/getData/toSelectDB';
import uploadFile from './modules/getData/uploadFile';
import toJSONBtn from './modules/auxiliaryModes/toJSONBtn';
import btnReset from './modules/auxiliaryModes/toResetBtn';
import {fitSet} from './modules/convertSet';

const examplesDB = document.querySelectorAll('div[data-db]'),
      uploadBtn = document.querySelector('#upload');

  toSelectDB(examplesDB);
  uploadFile(uploadBtn);
  toJSONBtn(fitSet);
  btnReset();
