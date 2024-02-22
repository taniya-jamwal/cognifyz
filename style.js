.gallery {
	display: flex;
	flex-wrap: wrap;
      }
      .thumbnail {
	width: 150px;
	height: 150px;
	object-fit: cover;
	margin: 10px;
	cursor: pointer;
      }
      .thumbnail:hover {
	opacity: 0.7;
      }
      .enlarged {
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	max-width: 80%;
	max-height: 80%;
      }
      .enlarged img {
	max-width: 100%;
	max-height: 100%;
      }
