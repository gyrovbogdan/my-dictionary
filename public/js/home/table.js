export function table(data) {
    const $table = $("#dictionary-body");
    $table.empty();

    for (const row of data["data"]) {
        const { number, id, word, translation } = row;
        const tableRow = `
        <tr>
            <th scope="row">${number}<input hidden name="id" value="${id}"></th>
            <td><input name="word" value="${word}" class="text ru-text table-text" minlength="1" maxlength="20" data-lang="ru"></td>
            <td><input name="translation" value="${translation}" class="text en-text table-text" minlength="2" maxlength="20" data-lang="en"></td>
            <td class="p-0">
                <button class="btn btn-close delete-button"></button>
            </td>
        </tr>`;
        $table.append(tableRow);
    }
}
