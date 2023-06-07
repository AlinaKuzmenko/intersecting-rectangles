import { BaseSyntheticEvent, useEffect, useState } from 'react';
import Button from '../Button';
import { IDecodeResponse, IEncodeResponse, IGetLinksResponse } from './types.ts';
import LinksList from './LinksList';
import GeneratedLink from './GeneratedLink';
import styles from './styles.module.scss';

export const API_URL = 'http://127.0.0.1:5000/';
const ENCODE = 'encode';
const DECODE = 'decode';
const LIST = 'list';
const DEFAULT_URL = 'https://sento.notion.site/sento-io-Coding-Challenges-FE-57e0b85f13cc4f0d9a4ffdc93db5da5d#1d12bff8eaef4ed29393394d2a9febef';

function URLShortening() {
  const [inputValue, setInputValue] = useState<string>(DEFAULT_URL);
  const [url, setUrl] = useState<string>('');
  async function encode() {
    try {
      const response = await fetch(`${API_URL}${ENCODE}`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(
          {
            // @ts-ignore
            long_url: inputValue,
          }
        )
      });
      const jsonData: IEncodeResponse = await response.json();
      setUrl(jsonData.link);
    } catch (error: any) {
      setUrl('');
      throw new Error(JSON.stringify(error?.message || error));
    }
  }
  async function decode() {
    try {
      const response = await fetch(`${API_URL}${DECODE}`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({
          short_url: url
        })
      });
      const jsonData: IDecodeResponse = await response.json();
      setUrl(jsonData.link);
    } catch(error: any) {
      setUrl('');
      throw new Error(JSON.stringify(error?.message || error));
    }
  }
  {/** update links list */}
  const [links, setLinks] = useState<{ [key: string]: string }>({});
  async function getLinks() {
    const response = await fetch(`${API_URL}${LIST}`, { method: 'GET', mode: 'cors' });
    const jsonData: IGetLinksResponse = await response.json();
    setLinks(jsonData.shortened_urls);
  }
  useEffect(() => {
    getLinks();
  });
  {/** handle input change */}
  function handleOnChange(e: BaseSyntheticEvent) {
    setInputValue(e.target.value);
  }
  return (
    <div className={styles.urlShortening}>
      <h2>URL Shortening</h2>
      <input
        type="url"
        value={inputValue}
        className={styles.input}
        onChange={handleOnChange}
      />
      <div className={styles.buttons}>
        <Button
          type="button"
          onClick={encode}
          disabled={!inputValue}
        >
          Encode
        </Button>
        <Button
          type="button"
          onClick={decode}
          disabled={!url}
        >
          Decode
        </Button>
      </div>
      {url && <GeneratedLink url={url} />}
      <LinksList links={links} />
    </div>
  );
}

export default URLShortening;
