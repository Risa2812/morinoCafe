// もりのカフェ 予約フォーム バリデーション
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('reserve-form');
    if (!form) return;

    var thanks = document.getElementById('reserve-thanks');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var isValid = true;

        // いったん全エラー表示をリセット
        clearError('name');
        clearError('date');
        clearError('time');
        clearError('people');
        clearError('tel');

        var name = document.getElementById('name').value.trim();
        var date = document.getElementById('date').value;
        var time = document.getElementById('time').value;
        var people = document.getElementById('people').value;
        var tel = document.getElementById('tel').value.trim();

        // お名前:必須
        if (name === '') {
            showError('name', 'お名前を入力してください');
            isValid = false;
        }

        // 日付:必須+過去日不可
        if (date === '') {
            showError('date', 'ご希望日を選択してください');
            isValid = false;
        } else {
            var today = new Date();
            today.setHours(0, 0, 0, 0);
            var selectedDate = new Date(date);
            if (selectedDate < today) {
                showError('date', '本日以降の日付を選択してください');
                isValid = false;
            }
        }

        // 時間:必須
        if (time === '') {
            showError('time', 'ご希望時間を選択してください');
            isValid = false;
        }

        // 人数:必須+1〜20の範囲
        if (people === '') {
            showError('people', '人数を入力してください');
            isValid = false;
        } else if (people < 1 || people > 20) {
            showError('people', '1〜20名の範囲で入力してください');
            isValid = false;
        }

        // 電話番号:必須+数字のみ10〜11桁
        var telPattern = /^[0-9]{10,11}$/;
        if (tel === '') {
            showError('tel', '電話番号を入力してください');
            isValid = false;
        } else if (!telPattern.test(tel)) {
            showError('tel', 'ハイフンなしの数字10〜11桁で入力してください');
            isValid = false;
        }

        if (isValid) {
            form.hidden = true;
            thanks.hidden = false;
        }
    });

    function showError(fieldId, message) {
        var errorEl = document.getElementById('error-' + fieldId);
        var inputEl = document.getElementById(fieldId);
        if (errorEl) errorEl.textContent = message;
        if (inputEl) inputEl.classList.add('input-error');
    }

    function clearError(fieldId) {
        var errorEl = document.getElementById('error-' + fieldId);
        var inputEl = document.getElementById(fieldId);
        if (errorEl) errorEl.textContent = '';
        if (inputEl) inputEl.classList.remove('input-error');
    }
});
