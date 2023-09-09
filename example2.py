import cv2
import numpy as np
import dlib

cap = cv2.VideoCapture(0)
address = "https://192.168.1.55:8080/video"

detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor(r"C:\Users\Itish\GazeTracking\gaze_tracking\trained_models\shape_predictor_68_face_landmarks.dat")

cap.open(address)

while True:
    ret, frame = cap.read()

    if not ret:
        continue  # Skip the current iteration if frame reading fails

    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

    faces = detector(gray)
    for face in faces:
        landmarks = predictor(gray, face)

        # Check if eye landmarks are available
        if landmarks.num_parts == 68:
            # Get the landmarks for the left eye
            left_eye_landmarks = []
            for n in range(36, 42):
                x = landmarks.part(n).x
                y = landmarks.part(n).y
                left_eye_landmarks.append((x, y))

            # Get the landmarks for the right eye
            right_eye_landmarks = []
            for n in range(42, 48):
                x = landmarks.part(n).x
                y = landmarks.part(n).y
                right_eye_landmarks.append((x, y))
            
            print(landmarks.part(27))
            x=landmarks.part(27).x
            y=landmarks.part(27).y
            cv2.circle(frame, (x,y),3,(0,0,255),2)

            # Calculate the center of the left pupil
            left_pupil_center = np.mean(left_eye_landmarks, axis=0, dtype=np.int)
            # Calculate the center of the right pupil
            right_pupil_center = np.mean(right_eye_landmarks, axis=0, dtype=np.int)

            # Draw a circle around the left pupil
            #cv2.circle(frame, tuple(left_pupil_center), 3, (0, 0, 255), 2)
            # Draw a circle around the right pupil
            #cv2.circle(frame, tuple(right_pupil_center), 3, (0, 0, 255), 2)
            

    cv2.imshow("Frame", frame)
    key = cv2.waitKey(1)
    if key == 27:
        break

cap.release()
cv2.destroyAllWindows()
