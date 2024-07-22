import renderer from 'react-test-renderer'
import Counter from './src/component/Counter'

test('increases the count on hitting +', () => {
    const component = renderer.create(<Counter/>)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    renderer.act(() => {
        tree.children[1].props.onClick()
    })

    tree = component.toJSON()

    expect(tree).toMatchSnapshot()
    // expect(Number(changedTree.children[0].children)).toBe(Number(tree.children[0].children) + 1)
})