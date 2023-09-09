"""
Demonstration of the GazeTracking library.
Check the README.md for complete documentation.
"""
import numpy as np
import dlib
import cv2
from gaze_tracking import GazeTracking
address = "https://192.168.215.205:8080/video"
detector = dlib.get_frontal_face_detector()
predictor = dlib.shape_predictor(r"C:\Users\Itish\GazeTracking\gaze_tracking\trained_models\shape_predictor_68_face_landmarks.dat")

gaze = GazeTracking()
cap = cv2.VideoCapture(0)
cap.open(address)
while True:
    # We get a new frame from the webcam
    _, frame = cap.read()
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
    # We send this frame to GazeTracking to analyze it
    gaze.refresh(frame)

    frame = gaze.annotated_frame()
    text = ""

    if gaze.is_blinking():
        text = "Blinking"
    elif gaze.is_right():
        text = "Looking right"
    elif gaze.is_left():
        text = "Looking left"
    elif gaze.is_center():
        faces = detector(gray)
        for face in faces:
            landmarks = predictor(gray, face)
        

            text = "Looking center"
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

                # Calculate the center of the left pupil
                left_pupil_center = np.mean(left_eye_landmarks, axis=0, dtype=np.int)
                # Calculate the center of the right pupil
                right_pupil_center = np.mean(right_eye_landmarks, axis=0, dtype=np.int)

                # Extract the ROI for the left eye
                x3 = left_eye_landmarks[0][0]
                y3 = min([p[1] for p in left_eye_landmarks])
                x4 = left_eye_landmarks[3][0]
                y4 = max([p[1] for p in left_eye_landmarks])
                left_eye_roi = frame[y3:y4, x3:x4]

                
                cv2.imwrite("left_eye_roi.jpg", left_eye_roi)
                print("looking center")

                # Extract the ROI for the right eye
                x1 = right_eye_landmarks[0][0]
                y1 = min([p[1] for p in right_eye_landmarks])
                x2 = right_eye_landmarks[3][0]
                y2 = max([p[1] for p in right_eye_landmarks])
                right_eye_roi = frame[y1:y2, x1:x2]

                
                cv2.imwrite("right_eye_roi.jpg", right_eye_roi)

    cv2.putText(frame, text, (90, 60), cv2.FONT_HERSHEY_DUPLEX, 1.6, (147, 58, 31), 2)

    left_pupil = gaze.pupil_left_coords()
    right_pupil = gaze.pupil_right_coords()
    cv2.putText(frame, "Left pupil:  " + str(left_pupil), (90, 130), cv2.FONT_HERSHEY_DUPLEX, 0.9, (147, 58, 31), 1)
    cv2.putText(frame, "Right pupil: " + str(right_pupil), (90, 165), cv2.FONT_HERSHEY_DUPLEX, 0.9, (147, 58, 31), 1)

    cv2.imshow("Demo", frame)

    if cv2.waitKey(1) == 27:
        break
   
cap.release()
cv2.destroyAllWindows()
