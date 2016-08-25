/** @babel */
/** @jsx etch.dom */
/* eslint-disable react/no-unknown-property */

import {CompositeDisposable} from 'atom'
import etch from 'etch'
import EtchComponent from '../etch-component'

export default class TestPanel extends EtchComponent {
  constructor (props) {
    if (!props) {
      props = {icon: 'check', state: 'unknown', testOutput: 'No test output...'}
    }
    super(props)
    this.subscriptions = new CompositeDisposable()
  }

  render () {
    return (
      <atom-panel className='tester-go-panel padded'>
        <div className='inset-panel'>
          <header className='panel-heading'>
            <nav className='panel-nav'>
              <span className='panel-nav-item'>GO</span>
              <span className='panel-nav-item is-selected'>TEST</span>
              <span className='panel-nav-item'>BUILD</span>
            </nav>
            <button className='panel-button icon icon-x' onclick={this.handleClick.bind(this)} />
          </header>
          <div className='panel-body padded'><span style='white-space: pre-wrap;'>{this.props.testOutput}</span></div>
        </div>
      </atom-panel>
    )
  }

  handleClick () {
    if (this.props.toggle) {
      this.props.toggle()
    }
  }

  dispose () {
    this.destroy()
  }

  destroy () {
    super.destroy()
    this.subscriptions.dispose()
  }
}
