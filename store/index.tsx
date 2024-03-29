/* eslint-disable import/no-cycle */
import { createLogger } from 'redux-logger';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './slice/modalSlice';
import featureTableReducer from './slice/featureTableSlice';
import DNDBoxReducer from './slice/DNDBoxSlice';
import priceModalReducer from './slice/priceModalSlice';
import faqSliceReducer from './slice/faqSlice';
import monthYearToggleReducer from './slice/monthYearToggleSlice';
import configReducer from './slice/configSlice';
import dashboardReducer from './slice/dashboardSlice';
import versionListReducer from './slice/versionListSlice';
import uploadModalReducer from './slice/uploadModalSlice';
import templateReducer from './slice/templateSlice';
import versionReducer from './slice/versionSlice';
import authReducer from './slice/authSlice';
import templateListReducer from './slice/templateListSlice';
import editTemplateReducer from './slice/editTemplateSlice';

const logger = createLogger();

const rootReducer = combineReducers({
	modal: modalReducer,
	featureTable: featureTableReducer,
	faq: faqSliceReducer,
	dndBox: DNDBoxReducer,
	priceModal: priceModalReducer,
	config: configReducer,
	dashboard: dashboardReducer,
	versionList: versionListReducer,
	uploadModal: uploadModalReducer,
	template: templateReducer,
	version: versionReducer,
	monthYearToggle: monthYearToggleReducer,
	auth: authReducer,
	templateList: templateListReducer,
	editTemplate: editTemplateReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
	reducer: rootReducer,
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}).concat(logger),
});
