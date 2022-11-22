/* eslint-disable import/no-anonymous-default-export */
export default `
body {
  display: block;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#globalLoader {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  background-color: #EC682F;
}

#globalLoader svg {
  width: 52px;
  height: 52px;
  animation: spin 1.5s linear infinite;

  fill: #ffffff;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
    -o-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
    -o-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
}
`
