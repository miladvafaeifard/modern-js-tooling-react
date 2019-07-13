import ClassNames from './class-names'

describe('ClassNames', () => {
  describe('getClassNames', () => {
    it('should return with class name string with string based input class names', () => {
      //ASSIGN
      const config = 'test-class-name'
      const expectedClassNames = 'test-class-name'
      //ACT
      const receivedMessages = ClassNames.getClassNames(config)
      //ASSERT
      expect(receivedMessages).toEqual(expectedClassNames)
    })

    it('should return with class name string with array based input class names', () => {
      //ASSIGN
      const config = ['test-class-name-1', 'test-class-name-2']
      const expectedClassNames = 'test-class-name-1 test-class-name-2'
      //ACT
      const receivedMessages = ClassNames.getClassNames(config)
      //ASSERT
      expect(receivedMessages).toEqual(expectedClassNames)
    })

    it('should return with class name string with object based input class names', () => {
      //ASSIGN
      const config = {
        selected: false,
        visited: true,
        testClassName1: true
      }
      const expectedClassNames = 'visited test-class-name-1'
      //ACT
      const receivedMessages = ClassNames.getClassNames(config)
      //ASSERT
      expect(receivedMessages).toEqual(expectedClassNames)
    })

    it('should return with class name string with combined type of input class names', () => {
      //ASSIGN
      const config = [
        'testClassName1',
        {
          selected: true,
          visited: false,
          testClassName2: true
        }
      ]
      const expectedClassNames = 'test-class-name-1 selected test-class-name-2'
      //ACT
      const receivedMessages = ClassNames.getClassNames(config)
      //ASSERT
      expect(receivedMessages).toEqual(expectedClassNames)
    })

    it('should return with empty string if input is unspecified', () => {
      //ASSIGN
      const expectedClassNames = ''
      //ACT
      const receivedMessagesEmpty = ClassNames.getClassNames()
      const receivedMessagesNull = ClassNames.getClassNames(null)
      const receivedMessagesNaN = ClassNames.getClassNames(NaN)
      //ASSERT
      expect(receivedMessagesEmpty).toEqual(expectedClassNames)
      expect(receivedMessagesNull).toEqual(expectedClassNames)
      expect(receivedMessagesNaN).toEqual(expectedClassNames)
    })
  })
})
