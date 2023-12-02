import { Paragraph, ScreenReaderOnly } from '@sikt/sds-core'
// import clsx from 'cslx'

export const ProfileCard = () => {
  return (
    <div className="test">
      <div className="cardContent">
        <Paragraph as="span" variant="regular" modifier="strong">
          Test
        </Paragraph>
        <ScreenReaderOnly>Test</ScreenReaderOnly>
      </div>
    </div>
  )
}
