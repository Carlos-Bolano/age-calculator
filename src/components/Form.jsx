import { useState } from 'react'
import arrowSvg from '../assets/icon-arrow.svg'

function Form ({ setBirthDateOuput }) {
  const [birthDay, setBirthDay] = useState({
    day: '',
    month: '',
    year: ''
  })

  const [errors, setErrors] = useState({
    day: '',
    month: '',
    year: ''
  })

  const handleDayChange = (e) => {
    const day = e.target.value
    if (day >= 1 && day <= 31) {
      setBirthDay({
        ...birthDay,
        day
      })
      setErrors({
        ...errors,
        day: ''
      })
    } else {
      setErrors({
        ...errors,
        day: 'Must be a valid day'
      })
    }
  }

  const handleMonthChange = (e) => {
    const month = e.target.value
    if (month >= 1 && month <= 12) {
      setBirthDay({
        ...birthDay,
        month
      })
      setErrors({
        ...errors,
        month: ''
      })
    } else {
      setErrors({
        ...errors,
        month: 'Must be a valid month'
      })
    }
  }

  const handleYearChange = (e) => {
    const year = e.target.value
    const currentYear = new Date().getFullYear()
    if (year >= 1900 && year <= currentYear) {
      setBirthDay({
        ...birthDay,
        year
      })
      setErrors({
        ...errors,
        year: ''
      })
    } else {
      setErrors({
        ...errors,
        year: year > currentYear ? 'Must be in the past' : 'Must be from 1900'
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { day, month, year } = birthDay
    const today = new Date()
    const birthDate = new Date(year, month - 1, day)

    if (!day || !month || !year) {
      setErrors({
        day: !day ? 'Day is required' : '',
        month: !month ? 'Month is required' : '',
        year: !year ? 'Year is required' : ''
      })
      return
    }

    let ageInYears = today.getFullYear() - birthDate.getFullYear()
    const monthDifference = today.getMonth() - birthDate.getMonth()
    const dayDifference = today.getDate() - birthDate.getDate()

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      ageInYears--
    }

    const years = ageInYears
    const months = monthDifference < 0 ? 12 + monthDifference : monthDifference
    const days = dayDifference < 0 ? new Date(today.getFullYear(), today.getMonth(), 0).getDate() + dayDifference : dayDifference

    setBirthDateOuput({ years, months, days })
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} className='flex gap-4' >
      <div className="flex flex-col gap-1">
        <label
          className={errors.day ? 'uppercase font-bold text-[11px] tracking-widest text-red-500' : 'uppercase font-bold text-[11px] text-gray-600 tracking-widest' }
          htmlFor="day"
        >
          day
        </label>
        <input
          id='day'
          type="number"
          required
          placeholder="DD"
          min="1"
          max="31"
          onChange={(e) => handleDayChange(e)}
          className={errors.day ? 'max-w-[75px] md:max-w-[85px] bg-white border border-red-500 rounded-md outline-none py-1 px-2 font-bold md:p-2 lg:p-2' : 'max-w-[75px] md:max-w-[85px] bg-white border border-gray-300 rounded-md outline-none py-1 px-2 font-bold md:p-2 lg:p-2'}
        />
         <p className="text-red-500 text-[9px] font-medium">{errors.day}</p>
      </div>
      <div className="flex flex-col gap-1">
        <label
          className={errors.month ? 'uppercase font-bold text-[11px] tracking-widest text-red-500' : 'uppercase font-bold text-[11px] text-gray-600 tracking-widest' }
          htmlFor="month"
        >
          month
        </label>
        <input
          id='month'
          type="number"
          required
          placeholder="MM"
          min="1"
          max="12"
          onChange={(e) => handleMonthChange(e)}
          className={errors.month ? 'max-w-[75px] md:max-w-[85px] bg-white border border-red-500 rounded-md outline-none py-1 px-2 font-bold md:p-2 lg:p-2' : 'max-w-[75px] md:max-w-[85px] bg-white border border-gray-300 rounded-md outline-none py-1 px-2 font-bold md:p-2 lg:p-2'}
        />
        <p className="text-red-500 text-[9px] font-medium ">{errors.month}</p>
      </div>
      <div className="flex flex-col gap-1">
        <label
         className={errors.year ? 'uppercase font-bold text-[11px] tracking-widest text-red-500' : 'uppercase font-bold text-[11px] text-gray-600 tracking-widest' }
          htmlFor="year"
        >
          year
        </label>
        <input
          id='year'
          type="number"
          placeholder="YYYY"
          required
          min="1900"
          max="2023"
          onChange={(e) => handleYearChange(e)}
          className={errors.year ? 'max-w-[75px] md:max-w-[85px] bg-white border border-red-500 rounded-md outline-none py-1 px-2 font-bold md:p-2 lg:p-2' : 'max-w-[75px] md:max-w-[85px] bg-white border border-gray-300 rounded-md outline-none py-1 px-2 font-bold md:p-2 lg:p-2'}
        />
        <p className="text-red-500 text-[9px] font-medium">{errors.year}</p>
      </div>
      <button type="submit" className="bg-violet-600 p-4 rounded-full hover:bg-black hover:shadow-xl transition-all duration-500 absolute bottom-[-30px] left-0 right-0  max-w-max mx-auto md:mr-px">
        <img src={arrowSvg} alt="arrow" />
      </button>
    </form>
  )
}

export default Form
