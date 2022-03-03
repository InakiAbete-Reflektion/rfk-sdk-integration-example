import { init, setWidget, setCredentials, setWidgetType, WidgetDataType } from '@rfk-sdk/react';
import RecommendationWidget from '../Recommendation';

setWidgetType(WidgetDataType.RECOMMENDATION, {
  component: RecommendationWidget,
});

setWidget('sdk_random', { global: true, type: WidgetDataType.RECOMMENDATION });
setWidget('hs_random', { options: { properties: { initial: { title: 'Random Products' } } } });

setCredentials({
  env: 'staging',
  customerKey: '12353-150015332',
  apiKey: process.env.NEXT_PUBLIC_RFK_API_KEY,
  useToken: true,
});
init();
