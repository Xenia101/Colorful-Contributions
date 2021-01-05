<p align=center>
    <img width="100px" src="./img/logo.png">
</p>

<h2 align=center>
    Colorful Contributions
</h2>

<p align=center>
    Make your contribution graph colorful !
</p>

<p align=center>
    <img width="500px" src="./md-img/sample-style-1.PNG">
    <img width="500px" src="./md-img/sample-style-2.PNG">
</p>

<p>🎨 <strong>Colorful Contributions</strong> is an chrome extension app that makes graphs colorful</p>
<p>📌 Pull requests and <a href="https://github.com/Xenia101/Colorful-Contributions/issues">issue</a> are welcome :)</p>
 
---

## Installation

1. Clone or Download this repository
2. Enter `chrome://extensions/` in chrome
3. Click on `LOAD UNPACKED` button
4. Upload local repository directory

- Enable Developer Mode by clicking the toggle switch next to Developer mode
- https://developer.chrome.com/docs/extensions/mv2/getstarted/

## Customizing

- ### Using UI on tab
    - [ ] User customizing UI
    - [ ] Refectoring 

- ### Direct access to code

    - Add the code you want in `/css/colorful.css`
    ```css
    /*
        ./css/colorful.css
    */

    #custom-style>li:nth-child(1)
    background-color: #EBEDF0;
    ...
    #custom-style>li:nth-child(5)
    background-color: #0080FF;
    ```

    - Add the code in `./popup.html`
    ```html
    <!--
        ./popup.html
    -->

    <tr>
        <td>
            <div class="contrib-legend">
                <ul class="legend" id="custom-style"> <!--custom-style id-->
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </td>
        <td>
            <input type="radio" name="customRadio" value="custom-style"> <!--custom-style value-->
        </td>
    </tr>
    ```

## Browser Support

| ![chrome](https://camo.githubusercontent.com/26846e979600799e9f4273d38bd9e5cb7bb8d6d0/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f6368726f6d652f6368726f6d655f34387834382e706e67) 	| ![Firefox Edge](https://camo.githubusercontent.com/6087557f69ec6585eb7f8d7bd7d9ecb6b7f51ba1/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f66697265666f782f66697265666f785f34387834382e706e67) 	| ![IE](https://camo.githubusercontent.com/4b062fb12353b0ef8420a72ddc3debf6b2ee5747/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f617263686976652f696e7465726e65742d6578706c6f7265725f392d31312f696e7465726e65742d6578706c6f7265725f392d31315f34387834382e706e67) 	| ![Safari](https://camo.githubusercontent.com/6fbaeb334b99e74ddd89190a42766ea3b4600d2c/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f7361666172692f7361666172695f34387834382e706e67) 	| ![Opera](https://camo.githubusercontent.com/96d2405a936da1fb8988db0c1d304d3db04b8a52/68747470733a2f2f7261772e6769746875622e636f6d2f616c7272612f62726f777365722d6c6f676f732f6d61737465722f7372632f6f706572612f6f706572615f34387834382e706e67) 	|
|:------:	|:------------:	|:--:	|:------:	|:-----:	|
|    ✔   	|       -      	|  - 	|    -   	|   -  	|
> Chrome-only (chrome extension app)

---

<p align=center>© 2021 XENIA101 - Released under GPL License 2.0</p>
