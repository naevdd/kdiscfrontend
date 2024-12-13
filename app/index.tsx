import { Text, TextInput, View, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FormField from './formfield';
import React, { useState } from 'react';
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [form, setForm] = useState({
    name:'',
    phone:'',
    q1:'',
    q2:'',
    q3:'',
    q4:'',
    q5:'',
    q6:'',
    q7:'',
    q8:'',
    q9:'',
    q10:'',
    q11:'',
    q12:'',
    q13:'',
    q14:'',
    q15:'',
    q16:'',
    q17:'',
    q18:'',
    q19:'',
    q20:'',
  });

  const handleSubmitForm = async () => {
    /* Basic validation to check if all fields are filled
    if (!form.name || !form.phone || !form.q1 || !form.q2 || !form.q3 || !form.q4 || !form.q5 || !form.q6 || !form.q7 || !form.q8|| !form.q9 || !form.q10
      || !form.q11 || !form.q12|| !form.q13 || !form.q14|| !form.q15 || !form.q16|| !form.q17 || !form.q18 || !form.q19 || !form.q20
    ) {
      Alert.alert('Validation Error', 'Please fill in all the fields');
      return;
    }*/

    try {
      const response = await axios.post('http://192.168.1.37:3001/submit', form);

      if (response.status === 200) {
        Alert.alert('Success', 'Form submitted successfully');
        // Reset form after submission
        setForm({name: '', phone: '', q1: '', q2: '', q3: '', q4: '', q5: '', q6: '', q7: '', q8: '', q9: '', q10: '', q11: '', q12: '', q13: '', q14: '', q15: '',
          q16: '', q17: '', q18: '', q19: '', q20: '', });
      } else {
        Alert.alert('Submission Error', 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      Alert.alert('Network Error', 'Failed to connect to the server');    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4">
          <Text className="text-yellow-400 text-center mx-auto pt-10 pb-10 text-3xl font-pblack">കാർബൺ ന്യൂട്രൽ കുറുമാത്തൂർ ഗ്രാമഹിത സേവ</Text>
          <StatusBar style="auto" />

          <Text className="text-yellow-400 text-center mx-auto pt-10 pb-10 text-3xl font-pblack">ഊർജം</Text>

          <FormField
            title="Name"
            value={form.name}
            handleChangeText={(e) => setForm({ ...form, name: e })}
          />

          <FormField
            title="Phone"
            value={form.phone}
            handleChangeText={(e) => setForm({ ...form, phone: e })}
          />

          <FormField
            title="വൈദ്യുതി കണക്ഷൻ കൺസ്യൂമർ നമ്പർ :"
            value={form.q1}
            handleChangeText={(e) => setForm({ ...form, q1: e })}
          />
          <FormField
            title="ഒരു എൽ പി ജി സിലിണ്ടർ എത്ര മാസം / ദിവസം ഉപയോഗിക്കാൻ പറ്റും? :"
            value={form.q2}
            handleChangeText={(e) => setForm({ ...form, q2: e })}
          />
          <FormField
            title="ഒരു മാസം ഉപയോഗിക്കുന്ന മണ്ണെണ്ണയുടെ അളവ് :"
            value={form.q3}
            handleChangeText={(e) => setForm({ ...form, q3: e })}
          />
          <FormField
            title="ഉപയോഗിക്കുന്ന വിറകിൻ്റെ അളവ് (ദിവസത്തേക്ക് / ആഴ്‌ചയിൽ / മാസത്തേക്ക്):"
            value={form.q4}
            handleChangeText={(e) => setForm({ ...form, q4: e })}
          />

          <FormField
            title="ഏത് തരം അടുപ്പാണ് ഉപയോഗിക്കുന്നത്? (സാധാരണ അടുപ്പ് / പുകയില്ലാത്ത അടുപ്പ് / മറ്റുള്ളവ):"
            value={form.q5}
            handleChangeText={(e) => setForm({ ...form, q5: e })}
          />

          <FormField
            title="പ്രധാന വൈദ്യുതോപകരണങ്ങൾ"
            value={form.q6}
            handleChangeText={(e) => setForm({ ...form, q6: e })}
          />

          <FormField
            title="സോളാർ സ്ഥാപിച്ചിട്ടുണ്ടോ? ഉണ്ടെങ്കിൽ എത്രയാണ് കപ്പാസിറ്റി?"
            value={form.q7}
            handleChangeText={(e) => setForm({ ...form, q7: e })}
          />

          <Text className="text-yellow-400 text-center mx-auto pt-10 pb-10 text-3xl font-pblack">മാലിന്യം</Text>

          <FormField
            title="ബയോഗ്യാസ് യൂണിറ്റ് ഉണ്ടെങ്കിൽ അതിന്റെ കപ്പാസിറ്റി :"
            value={form.q8}
            handleChangeText={(e) => setForm({ ...form, q8: e })}
          />

          <FormField
            title=" ഒരു ദിവസം വീട്ടിലുണ്ടാകുന്ന മാലിന്യവും സംസ്‌കരണ രീതിയും :"
            value={form.q9}
            handleChangeText={(e) => setForm({ ...form, q9: e })}
          />

          <FormField
            title="ഏത് തരം സെപ്റ്റിക് ടാങ്ക് ആണ് ഉള്ളത് ( കുഴി / മൂന്ന് ചേംബർ ഉള്ള ആധുനിക മോഡൽ):"
            value={form.q10}
            handleChangeText={(e) => setForm({ ...form, q10: e })}
          />

          <FormField
            title="അടുക്കളയിൽ നിന്നുള്ള മലിനജലം എങ്ങനെയാണ് കൈകാര്യം ചെയ്യുന്നത്?"
            value={form.q11}
            handleChangeText={(e) => setForm({ ...form, q11: e })}
          />
          
          <FormField
            title="കുളിമുറികളിൽ നിന്നുള്ള മലിനജലം എങ്ങനെയാണ് കൈകാര്യം ചെയ്യുന്നത്?"
            value={form.q12}
            handleChangeText={(e) => setForm({ ...form, q12: e })}
          />
          <FormField
            title="പറമ്പിൽ ഉള്ള കരിയിലകളും മറ്റും എന്താണ് ചെയ്യാറ്?"
            value={form.q13}
            handleChangeText={(e) => setForm({ ...form, q13: e })}
          />

          <Text className="text-yellow-400 text-center mx-auto pt-10 pb-10 text-3xl font-pblack">ജലം</Text>

          <FormField
            title="ജല ഉപയോഗ സ്രോതസ്സ് എന്താണ് (സ്വന്തം കിണർ / പൊതുവിതരണം) :"
            value={form.q14}
            handleChangeText={(e) => setForm({ ...form, q14: e })}
          />

          <FormField
            title="ഒരു മാസം ഉപയോഗിക്കുന്ന ജലത്തിന്റെ അളവ്:"
            value={form.q15}
            handleChangeText={(e) => setForm({ ...form, q15: e })}
          />

          <FormField
            title="സ്വന്തം കിണർ ആണെങ്കിൽ എങ്ങനെയാണ് ജലം വീട്ടിലെത്തിക്കുന്നത് (പമ്പ് ഉപയോഗിച്ച് / കായികമായി)?"
            value={form.q16}
            handleChangeText={(e) => setForm({ ...form, q16: e })}
          />

          <Text className="text-yellow-400 text-center mx-auto pt-10 pb-10 text-3xl font-pblack">ഗതാഗതം</Text>

          <FormField
            title="കന്നുകാലി"
            value={form.q17}
            handleChangeText={(e) => setForm({ ...form, q17: e })}
          />

          <Text className="text-yellow-400 text-center mx-auto pt-10 pb-10 text-3xl font-pblack">കന്നുകാലി</Text>

          <FormField
            title="വളർത്തുമൃഗങ്ങൾ"
            value={form.q18}
            handleChangeText={(e) => setForm({ ...form, q18: e })}
          />

          <Text className="text-yellow-400 text-center mx-auto pt-10 pb-10 text-3xl font-pblack">കൃഷി</Text>

          <FormField
            title="ഏതൊക്കെ വിളകളാണ് കൃഷി ചെയ്യുന്നത്?"
            value={form.q19}
            handleChangeText={(e) => setForm({ ...form, q19: e })}
          />

          <Text className="text-yellow-400 text-center mx-auto pt-10 pb-10 text-3xl font-pblack">മറ്റു വിവരങ്ങൾ</Text>

          <FormField
            title="നിഴൽ വീഴാത്ത ടെറസ് ഏരിയ"
            value={form.q20}
            handleChangeText={(e) => setForm({ ...form, q20: e })}
          />

          
          <TouchableOpacity
            className="mt-5 bg-yellow-400 p-4 rounded-xl"
            onPress={handleSubmitForm}
          >
            <Text className="text-center text-black font-psemibold">Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
