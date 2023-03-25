import { motion } from 'framer-motion'
import { UserIcon } from '../common/UserIcon'

export type UserIconForHeaderProps = {
  size: 'sm' | 'md' | 'lg'
  badgeNumber?: number
}

const sizes = {
  sm: 'h-6 w-6',
  md: 'h-8 w-8',
  lg: 'h-10 w-10',
}

export const UserIconForHeader: React.FC<UserIconForHeaderProps> = ({ size, badgeNumber }) => {
  const badgeClass =
    badgeNumber !== undefined
      ? 'absolute -bottom-1 -right-4 inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-white bg-red-500 rounded-full z-20'
      : ''

  const displayBadgeNumber = badgeNumber !== undefined && badgeNumber > 99 ? '99+' : badgeNumber

  return (
    <motion.div
      className={`relative flex items-center justify-center ${sizes[size]}`}
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <linearGradient id="gradient" gradientTransform="rotate(45)">
          <stop offset="0%" stopColor="#0072ff" />
          <stop offset="100%" stopColor="#00c6ff" />
        </linearGradient>
        <circle cx="50" cy="50" r="50" fill="url(#gradient)" />
      </svg>
      <UserIcon
        size={size}
        src="data:image/jpeg;base64,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"
      />
      {badgeNumber !== undefined && (
        <motion.span
          className={badgeClass}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.25, delay: 0.125 }}
        >
          {displayBadgeNumber}
        </motion.span>
      )}
    </motion.div>
  )
}
