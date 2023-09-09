import cv2
import numpy as np
import dlib

cap = cv2.VideoCapture(0)
address = "https://192.168.89.76:8080/video"

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
            # ... (existing code for landmark extraction)

            # Extract the ROI for the left eye
            x3 = left_eye_landmarks[0][0]
            y3 = min([p[1] for p in left_eye_landmarks])
            x4 = left_eye_landmarks[3][0]
            y4 = max([p[1] for p in left_eye_landmarks])
            left_eye_roi = frame[y3:y4, x3:x4]

            # Save the left eye ROI as an image
            cv2.imwrite("left_eye_roi.jpg", left_eye_roi)

            # Extract the ROI for the right eye
            x1 = right_eye_landmarks[0][0]
            y1 = min([p[1] for p in right_eye_landmarks])
            x2 = right_eye_landmarks[3][0]
            y2 = max([p[1] for p in right_eye_landmarks])
            right_eye_roi = frame[y1:y2, x1:x2]

            # Save the right eye ROI as an image
            cv2.imwrite("right_eye_roi.jpg", right_eye_roi)

            # Draw a circle around the nose tip (landmark 27)
            x = landmarks.part(27).x
            y = landmarks.part(27).y
            cv2.circle(frame, (x, y), 3, (0, 0, 255), 2)

            # Draw rectangles around the eye ROIs
            cv2.rectangle(frame, (x1, y1), (x2, y2), (0, 255, 0), 2)
            cv2.rectangle(frame, (x3, y3), (x4, y4), (0, 255, 0), 2)

    cv2.imshow("Frame", frame)
    key = cv2.waitKey(1)
    if key == 27:
        break

cap.release()
cv2.destroyAllWindows()
