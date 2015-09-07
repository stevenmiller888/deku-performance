import element from 'dekujs/magic-virtual-element';
import raf from 'component/raf';
import ms from 'rauchg/ms.js';
import styles from './styles';

/**
 * Perf reference.
 */

const perf = window.performance
  || window.webkitPerformance
  || window.msPerformance
  || window.mozPerformance;

/**
 * `Performance`.
 */

export default {
  afterMount({ props, state }, el, updateState) {
    if (!perf) console.error('This browser does not support the Navigation Timing API');

    let timing = perf.timing;
    let opts = { long: true };

    raf(update);

    function update() {
      updateState({
        requestTime: ms(timing.responseEnd - timing.requestStart, opts),
        domTime: ms(timing.domComplete - timing.domLoading, opts),
        dnsTime: ms(timing.domainLookupEnd - timing.domainLookupStart, opts),
        tcpTime: ms(timing.connectEnd - timing.connectStart, opts)
      });
    }
  },

  render({ props, state }) {
    let { corner } = props;

    // defaults
    let requestTime = state.requestTime || '';
    let domTime = state.domTime || '';
    let dnsTime = state.dnsTime || '';
    let tcpTime = state.tcpTime || '';

    switch (corner) {
      case 'topLeft':
        styles.container.top = '0';
        styles.container.left = '0';
        break;
      case 'topRight':
        styles.container.top = '0';
        styles.container.right = '0';
        break;
      case 'bottomLeft':
        styles.container.bottom = '0';
        styles.container.left = '0';
        break;
      case 'bottomRight':
        styles.container.bottom = '0';
        styles.container.right = '0';
        break;
    }

    return (
      <div style={styles.container}>
        <table style={styles.table} cellpadding="0" cellspacing="0">
          <tr style={styles.header}>
            <td style={styles.cell}>Activity</td>
            <td style={styles.cell}>Time</td>
          </tr>
          <tr style={styles.row}>
            <td style={styles.cell}>Request &#65515; Response</td>
            <td style={styles.cellTime}>{ requestTime }</td>
          </tr>
          <tr style={styles.row}>
            <td style={styles.cell}>DOM Construction</td>
            <td style={styles.cellTime}>{ domTime }</td>
          </tr>
          <tr style={styles.row}>
            <td style={styles.cell}>DNS Lookup</td>
            <td style={styles.cellTime}>{ dnsTime }</td>
          </tr>
          <tr style={styles.row}>
            <td style={styles.cell}>TCP Connection</td>
            <td style={styles.cellTime}>{ tcpTime }</td>
          </tr>
        </table>
      </div>
    );
  }
};
