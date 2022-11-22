const Barcode = ({ ...props }) => (
  <svg
    fill='none'
    viewBox='0 0 22 20'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M9 10V4H10M9 10H10V4M9 16V13H10M10 13V16H9M6 4V10M6 13V16M13 4V10M13 13V16M16 4V10M16 13V16M5 1H2V4M1 10H21M17 1H20V4M5 19H2V16M17 19H20V16'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

export default Barcode
