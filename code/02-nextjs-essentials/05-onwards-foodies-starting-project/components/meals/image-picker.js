'use client';

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({ label, name }) {
	const [pickedImage, setPickedImage] = useState();

	const imageInput = useRef();

	function handleClickImagePicker() {
		imageInput.current.click();
	}

	function handleImageChange(event) {
		const file = event.target.files[0];

		if (!file) {
			setPickedImage(null);
			return;
		}

		const reader = new FileReader();

		reader.onload = function () {
			setPickedImage(reader.result);
		};

		reader.readAsDataURL(file);
	}

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
				<div className={classes.preview}>
					{!pickedImage && <p>No image picked yet.</p>}
					{pickedImage && <Image src={pickedImage} alt="Picked image by user" fill />}
				</div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
					ref={imageInput}
					onChange={handleImageChange}
					required
        />

        <button className={classes.button} type="button" onClick={handleClickImagePicker}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
