import toSelectDB from './modules/getData/toSelectDB';
import uploadFile from './modules/getData/uploadFile';
import {fitSet} from './modules/convertSet';
import toJSONBtn from './modules/auxiliaryModes/toJSONBtn';
import btnReset from './modules/auxiliaryModes/toResetBtn';

const examplesDB = document.querySelectorAll('div[data-db]'),
      uploadBtn = document.querySelector('#upload');

  toSelectDB(examplesDB);
  uploadFile(uploadBtn);
  btnReset();
  toJSONBtn(fitSet);
