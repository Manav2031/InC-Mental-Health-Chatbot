import pickle
f = open('emotion_detection.pkl', 'rb')
detect_emotion = pickle.load(f);
f.close(); 
print(detect_emotion('${text}'))